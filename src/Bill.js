export default function Bill({tip,inputvalue}){
    return <div>

        
       <h1> You pay ${(Number(inputvalue)+Number(tip))}&nbsp;(${Number(tip)}&nbsp;tip)</h1>
    </div>
}