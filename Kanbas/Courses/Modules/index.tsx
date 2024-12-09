export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button>Collapse All</button>
        <button>View Progress</button>
        <select name="cars" id="cars">
          <option value="publish-all">Publish All</option>
          <option value="publish-one">Publish one</option>
        </select>
        <button>+ Module</button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">
                    Learn what is Web Development
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create User Interfaces in HTML</li>
                  <li className="wd-content-item">Deploy the Assignment on Netlify</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }