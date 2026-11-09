
function Footer({ completedTasks, totalTasks }) {
  return (
    <div className="row g-2 mt-2">

      <div className="col-6">
        <div className="card bg-light text-dark text-center p-2">
          <h6 mb-1>Completed Tasks</h6>
          <h4 mb-0>{completedTasks}</h4>
        </div>
      </div>

      <div className="col-6">
        <div className="card bg-light text-dark text-center p-2">
          <h6 mb-1>Total Tasks</h6>
          <h4 mb-0>{totalTasks}</h4>
        </div>
      </div>

    </div>
  );
}

export default Footer;
