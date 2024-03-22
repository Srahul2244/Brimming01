import "./App.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "20%",
                padding: "10px",
                border: "1px solid red",
                backgroundColor: "blueviolet",
                color: "white",
              }}
              onClick={() => paginate(page)}
              href="#/"
              className="page-link"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Pagination;
