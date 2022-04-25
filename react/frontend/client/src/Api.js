import React from "react";

class Api extends React.Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    fetchData(){
     const id = 2;   
     fetch('http://127.0.0.1:8000/stuinfo/' + id)
     .then(response=>response.json())
     .then((data)=>{
       this.setState({
           data:data
       });
     });
    //  console.log(this.)
    }
    componentDidMount() {
      this.fetchData();  
    }
  
    render() {
      const empdata = this.state.data;
      console.log('Render lifecycle')
      console.log(empdata)
      return <h1>Hello</h1>;
    }
}
export default Api;