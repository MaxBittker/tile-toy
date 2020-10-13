import React from "react";
import classNames from "classnames";
import { Clause, Selector, Effector } from "../../crate/pkg";
import { Matrix, SymmetryOptions, SlotOptions } from "./matrix";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: props.selectedElement,
      clause_index: props.clause_index,
      clause: Editor.getRule(props.selectedElement, props.clause_index)
    };
    window.Editor = this;
  }
  static getRule(selectedElement, clause_index) {
    console.log(selectedElement, clause_index);
    let clause = window.u.clause(selectedElement, clause_index);
    // let clause = rule.clause(clause_index);
    const selector = Array.from(
      new Uint8Array(memory.buffer, clause.selector.grid(), 9)
    );
    const effector = Array.from(
      new Uint8Array(memory.buffer, clause.effector.grid(), 9)
    );
    const symmetry = clause.symmetry();

    return {
      selector,
      effector,
      symmetry
    };
  }
  static getDerivedStateFromProps(props, state) {
    let { selectedElement, clause_index } = props;
    if (selectedElement != state.selectedElement && selectedElement < 6) {
      return {
        selectedElement,
        clause: Editor.getRule(selectedElement, clause_index)
      };
    }

    return null;
  }
  setRule() {
    let { clause } = this.state;
    let {
      selector: j_selector,
      effector: j_effector,
      symmetry: j_symmetry
    } = clause;

    let selector = new Selector(...j_selector);
    let effector = new Effector(...j_effector);
    let r_clause = new Clause(
      SymmetryOptions[j_symmetry].key,
      selector,
      effector
    );
    window.u.set_clause(
      r_clause,
      this.props.selectedElement,
      this.props.clause_index
    );
  }

  incSymmetry(i) {
    let { clause } = this.state;
    let { symmetry } = clause;

    clause.symmetry =
      (SymmetryOptions.length + symmetry + i) % SymmetryOptions.length;

    this.setState(
      {
        clause
      },
      this.setRule
    );
  }
  render() {
    let { selectedElement } = this.props;
    let { clause } = this.state;
    // console.log(clause);
    let { selector, effector, symmetry } = clause;

    return (
      <div className="MatrixMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-10 10 410 180"
          width="100%"
        >
          <circle
            cx={9}
            cy={95}
            r="20"
            className="mat-circle"
            style={{
              strokeWidth: 1,
              fill: "rgba(255,255,255,0.2)"
            }}
          ></circle>

          <text
            x="9"
            y="99"
            style={{ fontSize: "35px" }}
            onContextMenu={e => {
              e.preventDefault();
              this.incSymmetry(-1);
            }}
            onClick={() => this.incSymmetry(1)}
          >
            {SymmetryOptions[symmetry].symbol}
          </text>

          <g className={classNames({ disabled: symmetry == 0 }, "clause")}>
            <g transform="translate(20,0)">
              {selector && (
                <Matrix
                  selectedElement={selectedElement}
                  options={SlotOptions}
                  grid={selector}
                  isSelector
                  setGrid={newGrid => {
                    if (symmetry == 0) {
                      return;
                    }
                    let { clause } = this.state;
                    clause.selector = newGrid;
                    this.setState({ clause }, this.setRule);
                  }}
                />
              )}
            </g>
            <g transform="translate(204,80)">
              {/* <polygon
                fill="white"
                stroke="black"
                points="15,0, 25,15 15,30, 15,20, 8,20, 8,10, 15,10 "
              /> */}
              <image href="assets/gold_arrow.png" height="25" width="20" />
            </g>
            <g transform="translate(215,0)">
              {effector && (
                <Matrix
                  selectedElement={selectedElement}
                  options={SlotOptions}
                  grid={effector}
                  setGrid={newGrid => {
                    if (symmetry == 0) {
                      return;
                    }
                    let { clause } = this.state;
                    clause.effector = newGrid;
                    this.setState({ clause }, this.setRule);
                  }}
                />
              )}
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export { Editor };
