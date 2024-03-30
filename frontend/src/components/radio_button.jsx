
// Managing through State
import { Radiobox, Label, Div } from "atomize";

class ManagingRadioboxWithState extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            selectedCountValue: 1
        };

        this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
    }

    toggleSelectedCount(value) {
      this.setState({
        selectedCountValue: value,
      })
    }

    render() {
        const { selectedCountValue} = this.state;

        return (
            <Div d="flex">
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(1)}
                  checked={ selectedCountValue === 1 }
                  name="count"
                />
                1
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(2)}
                  checked={ selectedCountValue === 2 }
                  name="count"
                />
                2
              </Label>
              <Label
                align="center"
                textWeight="600"
                m={{ b: "0.5rem", r: "2rem" }}
              >
                <Radiobox
                  onChange={() => this.toggleSelectedCount(3)}
                  checked={ selectedCountValue === 3 }
                  name="count"
                />
                3
              </Label>
              <Label align="center" textWeight="600" m={{ b: "0.5rem" }}>
                <Radiobox
                  onChange={() => this.toggleSelectedCount(4)}
                  checked={ selectedCountValue === 4 }
                  name="count"
                />
                4
              </Label>
            </Div>
        );
    }
}