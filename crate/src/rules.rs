use crate::species::{Clause, Effector, Rule, Selector, Species, SymmetryMode};

pub fn build_rule() -> [Rule; 7] {
    return [
        //empty
        Rule::new(Clause::new_null(), Clause::new_null(), Clause::new_null()),
        //solid
        Rule::new(Clause::new_null(), Clause::new_null(), Clause::new_null()),
        //sand
        Rule::new(
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Horizontal,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule2,
                    Species::Wild,
                ),
            },
            Clause {
                probability: 1,

                symmetry: SymmetryMode::Horizontal,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule2,
                ),
            },
            Clause {
                probability: 1,

                symmetry: SymmetryMode::Horizontal,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule4,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule4,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule2,
                ),
            },
        ),
        //green
        Rule::new(
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule3,
                    Species::Wild,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Rule3,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule3,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
            },
        ),
        Rule::new(
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Horizontal,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule4,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Horizontal,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Rule4,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
            },
            Clause::new_null(),
        ),
        Rule::new(
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Rule5,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                    Species::Empty,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule6,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule5,
                    Species::Wild,
                ),
            },
        ),
        Rule::new(
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Empty,
                    Species::Empty,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule6,
                ),
            },
            Clause {
                probability: 1,
                symmetry: SymmetryMode::Quad,
                selector: Selector::new(
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ),
                effector: Effector::new(
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                    Species::Wild,
                    Species::Rule6,
                    Species::Rule6,
                    Species::Wild,
                    Species::Empty,
                    Species::Wild,
                ),
            },
            Clause::new_null(),
        ),
    ];
}
