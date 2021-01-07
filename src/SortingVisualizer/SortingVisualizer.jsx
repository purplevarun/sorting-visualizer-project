import React from 'react';
import './styles.css';
import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';
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
        for(let i=0;i<200;i++){
            let value = Math.random()*100 + 1;
            value = Math.floor(value);   
            a.push(value);
        }
        console.log(a);
        this.setState({a});
    }
    // sorting algorithms placed here
    mergeSort(){
        const jsarray = this.state.a.slice().sort((a,b)=>(a-b));
        // alert("merge sort called");
        const sortedArray = sortingAlgorithms.mergeSort(this.state.a);
        // console.log("js sorted array = "+jsarray);
        console.log(checkarrays(jsarray,sortedArray));
        // console.log("merge sorted array = " + sortedArray);
    }
    quickSort(){

    }
    bubbleSort(){

    }
    about(){
        alert("Made by Varun Kedia\npurplevarun@gmail.com");
    }
    
    //--------------------------------
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
                    <button className="btn btn-info btn-sm varunbtn" onClick={()=>this.shuffleArray()}>Shuffle Array</button> <br/>
                    <button className="btn btn-success varunbtn" onClick={()=>this.mergeSort()}>Merge Sort</button>
                    <button className="btn btn-success varunbtn" onClick={()=>this.quickSort()}>Quick Sort</button>
                    <button className="btn btn-success varunbtn" onClick={()=>this.bubbleSort()}>Bubble Sort</button> <br/>
                    <button className="btn btn-danger btn-sm varunbtn" onClick={()=>this.about()}>About</button> <br/>
                </div>
            </div>
            

        );
    }
    
}
function checkarrays(array1,array2) {
    if(array1.length!==array2.length) return false;
    for(let i=0;i<array1.length;i++) {
        if(array1[i]!==array2[i]) return false;
    }
    return true;
}