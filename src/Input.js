export default function Input({inputvalue,setInputvalue}) {
  
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      
    </div>
  );
}
