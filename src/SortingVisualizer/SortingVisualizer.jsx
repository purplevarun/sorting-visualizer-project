import React from 'react';
import './styles.css';
import {merge_sort} from '../sortingAlgorithms/sortingAlgorithms';

// constraints
    const animation_speed = 10;
    const primary_color = "white";
    const secondary_color = "red";
// end 


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
        for(let i=0;i<60;i++){
            let value = Math.random()*500 + 10;
            value = Math.floor(value);   
            a.push(value);
        }
        console.log(a);
        this.setState({a});
    }
    // sorting algorithms placed here
    mergeSort(){
        const animations = merge_sort(this.state.a);
        // console.log("animatons = "+animations);
        for(let i=0;i<animations.length;i++){
            const bars = document.getElementsByClassName('arraybar');
            console.log("bars = "+bars);
            const iscolorchange = i%3 !== 2;
            if(iscolorchange){
                const [bar1index, bar2index] = animations[i];
                const bar1style = bars[bar1index].style;
                const bar2style = bars[bar2index].style;
                const color = i%3 === 0 ? secondary_color:primary_color;
                setTimeout(()=>{
                    bar1style.backgroundColor = color;
                    bar2style.backgroundColor = color;
                },i*animation_speed);
            }
            else{
                setTimeout(() => {
                    const [bar1index,newheight] = animations[i];
                    const bar1style = bars[bar1index].style;
                    bar1style.height=`${newheight}px`;
                }, i*animation_speed);
            }
        }
    }
    quickSort(){
        alert("qs()? false incomplete");
    }
    bubbleSort(){
        alert("bs()? false incomplete");
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
                        <div className="arraybar" key={idx} style={{backgroundColor:primary_color,height:`${value}px`}}>
                            
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