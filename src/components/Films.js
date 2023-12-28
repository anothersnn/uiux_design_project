import FilmCard from "./FilmCard";

const Films = ({ films, searchQuery }) => {
  return (
    <div className="bg-gray-900 rounded-xl container max-w-7xl mx-auto pb-10 xs:px-0.5 sm:px-1 md:px-2 lg:px-4 my-9 xs:py-1 sm:py-1 md:py-2 lg:py-4">
      <div className="grid gap-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {films ? (
          films.map((film) => (
            <FilmCard film={film} key={film.id} />
          ))
        ) : (
          <div className="font-bold text-xl mb-1 ">
            {searchQuery ? "No results found" : "Loading..."}
          </div>
        )}
      </div>
    </div>
  );
};;

export default Films;
