//getStaticPaths is similar to getStaticProps in that it allows nextjs to know what to render ahead of time
//With getStaticPaths it knows how many individual pages to render ahead of time

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  //create array of objects that tells nextjs the route params
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  //implement the route parameters
  return {
    paths: paths,
    //fallback has to do with fallback pages. setting it to false makes it so
    //visitors can't visit a page with an invalid id and will see the 404 page
    fallback: false,
  };
};

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;
