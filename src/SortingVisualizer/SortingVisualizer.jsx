import React from 'react';
import './SortingVisualizer.css';
export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            a:[], // creates new empty array
        };
    }
    componentDidMount(){
        this.shuffleArray(); // whenever the page loads, the array is shuffled
    }
    shuffleArray(){
        const a =[]; // empty array
        for(let i=0;i<50;i++){
            let value = Math.random()*100 + 1;
            value = Math.floor(value);   
            a.push(value);
        }
        // console.log(a);
        this.setState({a});
    }
    render(){
        const {a} = this.state;
        
        return(
            <>
                {a.map((value,idx)=>(
                    <div className="arraybar" key={idx}>
                        {value}
                    </div>
                ))}
            </>
        );
    }
}