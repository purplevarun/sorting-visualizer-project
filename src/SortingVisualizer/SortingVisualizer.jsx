import React from 'react';
import './styles.css';
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
        for(let i=0;i<75;i++){
            let value = Math.random()*100 + 10;
            value = Math.floor(value);   
            a.push(value);
        }
        // console.log(a);
        this.setState({a});
    }
    render(){
        const {a} = this.state;
        
        return(
            <div>
                <div className="bars_div">
                    {a.map((value,idx)=>(
                        <div className="arraybar" key={idx} style={{height:`${value*5}px`}}>
                            
                        </div>
                    ))}
                </div>
                <div className="inside_wrap">
                    <button className="btn btn-info btn-sm" onClick={()=>this.shuffleArray()}>Shuffle Array</button>
                </div>
            </div>
            

        );
    }
}