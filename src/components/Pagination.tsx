interface PaginationProps {
  pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({ pages, setCurrentPage }) => {
  return (
    <>
      {Array.from(Array(pages), (_, index) => {
        return (
          <button
            key={index}
            className='pagination-btn'
            value={index}
            onClick={(e) => {
              setCurrentPage(Number((e.target as HTMLButtonElement).value));
              const section = document.getElementById('home-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {index + 1}
          </button>
        );
      })}
    </>
  );
};

export default Pagination;
