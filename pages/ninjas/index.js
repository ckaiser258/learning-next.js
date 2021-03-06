import styles from '../../styles/Ninjas.module.css'

//getStaticProps runs at build time, NOT in the browser

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    //need to create this props object to use the data within the component
    props: { ninjas: data },
  };
};

//props.ninjas is coming from above
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(
        (ninja => (
          <div key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Ninjas;
