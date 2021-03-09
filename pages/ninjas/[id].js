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

//context object is automatically generated for each item
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  //set each ninja as a prop for the component
  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
