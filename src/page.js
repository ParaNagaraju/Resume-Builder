{workList.map((ed, ind) => {
    console.log("index", ind);
    return (
      <div key={ind}>
        <ul>
          <div>
            <li>
              {ed.startDate1} - {ed.endDate1}
            </li>
          </div>
          <li>
            <div> {ed.role}</div>
          </li>
          <li>
            <div> {ed.company}</div>
          </li>
          <li>
            <div>{ed.summary}</div>
          </li>
        </ul>
        <hr></hr>
        <button onClick={(e) => deleteWork1(e, ind)}>delete</button>
      </div>
    );
  })}