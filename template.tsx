import * as React from 'react';
import './{{template}}.styl';

import { withRouter } from 'react-router-dom'


interface Props {

}

export default withRouter<any>(
  class {{ template }} extends React.Component < Props, {} > {
    constructor(props: Props) {
      super(props);
      this.state = {

      };
    }
  
    componentWillMount() {

    }
  
    componentDidMount() { }
  
    componentWillReceiveProps(nextProps) { }
  
    shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  
    componentWillUpdate(nextProps, nextState) { }
  
    componentDidUpdate(prevProps, prevState) { }
  
    componentWillUnmount() { }
  
  
    render() {
      return (
        <div className="{{template}}">

        </div>
      );
    }
  }
)

