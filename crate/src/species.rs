use super::utils::*;
use js_sys::Array;
use Cell;
use SandApi;
use EMPTY_CELL;
// use std::cmp;
// use std::mem;
use wasm_bindgen::prelude::*;
// use web_sys::console;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum Species {
    Empty = 10,
    Wild = 11,
    Rule1 = 0,
    Rule2 = 1,
    Rule3 = 2,
    Rule4 = 3,
}

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum SymmetryMode {
    None = 0,
    Horizontal = 1,
    Vertical = 2,
    Quad = 3,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Rule {
    pub symmetry: SymmetryMode,
    pub selector: Selector,
    pub effector: Effector,
}

#[wasm_bindgen]
impl Rule {
    #[wasm_bindgen(constructor)]
    pub fn new(symmetry: SymmetryMode, selector: Selector, effector: Effector) -> Rule {
        return Rule {
            symmetry,
            selector,
            effector,
        };
    }
    pub fn symmetry(&self) -> SymmetryMode {
        self.symmetry
    }
}

// #[wasm_bindgen]
// #[repr(u8)]
// #[derive(Clone, Copy, Debug, PartialEq, Eq)]
// pub enum Slot {
//     Empty = 0,
//     Anything = 1,
//     Full = 2,
// }

// #[wasm_bindgen]
// #[repr(u8)]
// #[derive(Clone, Copy, Debug, PartialEq, Eq)]
// pub enum OutSlot {
//     Empty = 0,
//     Nop = 1,
//     Me = 2,
// }

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Selector {
    grid: [Species; 9],
}

#[wasm_bindgen]
impl Selector {
    #[wasm_bindgen(constructor)]
    pub fn new(
        v1: Species,
        v2: Species,
        v3: Species,
        v4: Species,
        v5: Species,
        v6: Species,
        v7: Species,
        v8: Species,
        v9: Species,
    ) -> Selector {
        return Selector {
            grid: [v1, v2, v3, v4, v5, v6, v7, v8, v9],
        };
    }

    pub fn grid(&self) -> *const Species {
        self.grid.as_ptr()
    }
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub struct Effector {
    grid: [Species; 9],
}

#[wasm_bindgen]
impl Effector {
    #[wasm_bindgen(constructor)]
    pub fn new(
        v1: Species,
        v2: Species,
        v3: Species,
        v4: Species,
        v5: Species,
        v6: Species,
        v7: Species,
        v8: Species,
        v9: Species,
    ) -> Effector {
        return Effector {
            grid: [v1, v2, v3, v4, v5, v6, v7, v8, v9],
        };
    }
    pub fn grid(&self) -> *const Species {
        self.grid.as_ptr()
    }
}

pub fn check_cell(slot: Species, cell: Cell) -> bool {
    match slot {
        Species::Wild => true,
        _ => cell.species == slot,
    }
}
pub fn execute_rule_orientation(
    cell: Cell,
    mut api: SandApi,
    rule: Rule,
    rx: i32,
    ry: i32,
    r: usize,
) -> (bool, SandApi) {
    for x in 0..rule.selector.grid.len() {
        let (mut dx, mut dy) = rot_right(matrix_index(x), r);
        dx *= rx;
        dy *= ry;
        if (dx != 0 || dy != 0) && !check_cell(rule.selector.grid[x], api.get(dx, dy)) {
            return (false, api);
        }
    }
    for x in 0..rule.effector.grid.len() {
        let (mut dx, mut dy) = rot_right(matrix_index(x), r);
        dx *= rx;
        dy *= ry;
        let out_slot = rule.effector.grid[x];
        match out_slot {
            Species::Empty => api.set(dx, dy, EMPTY_CELL),
            Species::Wild => (),
            _ => api.set(
                dx,
                dy,
                Cell {
                    species: out_slot,
                    ..cell
                },
            ),
        }
    }
    return (true, api);
}
pub fn execute_rule(cell: Cell, api: SandApi, rule: Rule) {
    // let mut passes = true;
    match rule.symmetry {
        SymmetryMode::None => {
            execute_rule_orientation(cell, api, rule, 1, 1, 0);
        }
        SymmetryMode::Vertical => {
            let dy = rand_dir_2();
            let (success, api) = execute_rule_orientation(cell, api, rule, 1, dy, 0);
            if success {
                return;
            }
            execute_rule_orientation(cell, api, rule, 1, dy * -1, 0);
        }
        SymmetryMode::Horizontal => {
            let dx = rand_dir_2();
            let (success, api) = execute_rule_orientation(cell, api, rule, dx, 1, 0);
            if success {
                return;
            }
            execute_rule_orientation(cell, api, rule, dx * -1, 1, 0);
        }
        SymmetryMode::Quad => {
            let mut r = rand_uint(4);
            let (success, api) = execute_rule_orientation(cell, api, rule, 1, 1, r);
            if success {
                return;
            }
            r = (r + 1) % 4;
            let (success, api) = execute_rule_orientation(cell, api, rule, 1, 1, r);

            if success {
                return;
            }
            r = (r + 1) % 4;

            let (success, api) = execute_rule_orientation(cell, api, rule, 1, 1, r);

            if success {
                return;
            }
            r = (r + 1) % 4;

            // tx = rx;
            execute_rule_orientation(cell, api, rule, 1, 1, r);
        }
    }
}

pub fn build_rule() -> [Rule; 4] {
    return [
        Rule {
            symmetry: SymmetryMode::None,
            selector: Selector {
                grid: [
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                ],
            },
            effector: Effector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ],
            },
        },
        Rule {
            symmetry: SymmetryMode::Horizontal,
            selector: Selector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ],
            },
            effector: Effector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule2,
                    Species::Wild,
                ],
            },
        },
        Rule {
            symmetry: SymmetryMode::None,
            selector: Selector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                ],
            },
            effector: Effector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule3,
                    Species::Wild,
                ],
            },
        },
        Rule {
            symmetry: SymmetryMode::Quad,
            selector: Selector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ],
            },
            effector: Effector {
                grid: [
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule4,
                    Species::Wild,
                ],
            },
        },
    ];
}
impl Species {
    pub fn update(&self, cell: Cell, api: SandApi) {
        let rule_sets = api.universe.rule_sets;
        match self {
            Species::Empty => {}
            Species::Wild => {}
            Species::Rule1 => execute_rule(cell, api, rule_sets[0]),
            Species::Rule2 => execute_rule(cell, api, rule_sets[1]),
            Species::Rule3 => execute_rule(cell, api, rule_sets[2]),
            Species::Rule4 => execute_rule(cell, api, rule_sets[3]),
        }
    }
}
