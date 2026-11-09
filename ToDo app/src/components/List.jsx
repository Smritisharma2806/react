
import Listitem from "./Listitem";

function List({ sortedTaskList, deleteTask, toggleDone }) {
  return (
   
    <div className="list-group">
      {sortedTaskList.map((item, index) => (
        <Listitem
          key={index}
          itemlist={item.text}
          completed={item.completed}
         onDelete={() => deleteTask(item)}
         onToggle={() => toggleDone(item)}
        />
      ))}
  
    </div>
  
  );
}

export default List;