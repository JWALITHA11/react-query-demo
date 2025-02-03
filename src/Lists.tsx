type FruitListProps = {
    fruit : string[];
}

type NumberListProps = {
    numbers : number[];
}
type DetailsList = {
    name : string ,
    age : number ,
    place : string
  };
  type DetailsProps ={
    data : DetailsList [];
    // user : Chidi [];
  };
  const details  = [{
    name:"suman",
    age : 23,
    place:"hyderabad"
  },
  
  {
  name:"keerthi",
  age : 13,
  place:"punjab"
  },
  {
  name:"priya",
  age : 21,
  place:"chennai"
  },
  {
  name:"suji",
  age : 22,
  place:"goa"
  },
  {
  name:"ram",
  age : 33,
  place:"pune"
  }
  ];
  const nums = [10,20,21,3,45,8,7,0,32,55,87];
const Lists = (props : FruitListProps) =>{
   
    return(
        <>
       <h4>List of fruits </h4>
        <div>
            {props.fruit.map((item,index) => (
               
                    <ul >
                        <li key = {index} >{item}</li>
                    </ul>
            
           )) }
          
        </div>
        <NumList numbers = {nums} />
        <Details data={details} />
        </>
    );
    

}
export default Lists;

const NumList = (props : NumberListProps) => {
    const numsGreaterthanHunderd = props.numbers.filter(ele => ele>100);
    const numsLessthanTen = props.numbers.filter(ele => ele <10);
    return (
    <>
   <div>
    <h4>All the array numbers :-</h4>
    <p>{props.numbers.join(' , ')} </p>
      </div>
    
<div>
    <h4>All the numbers greater than 50 :-</h4>
   {props.numbers.filter(ele => ele > 50).join(' , ')}
</div>
 
 <h4>Numbers Greater than 100 :-</h4>
 {numsGreaterthanHunderd.length > 0 ? numsGreaterthanHunderd.join(',') : "There are no numbers that are less than 100"}

<h4>Numbers less than 10 :-</h4>
{numsLessthanTen.length > 0 ? numsLessthanTen.join(' , ') : "There are no numbers less than 10"};



      </>
);
}
export {NumList};

const Details = (props:DetailsProps) => {
    const data = props.data;
    const listOfUsers = data.map((ele, index) => (
      <div key={index} className="div-container">
        <p>Name: {ele.name}</p>
        <p>Age: {ele.age}</p>
        <p>Place: {ele.place}</p>
      </div>
    ));
    return (
        <>
        <h4>Details using props </h4>
          {listOfUsers}
          {/* {userList} */}
        </>
      );
    };
    
    export {Details} ;