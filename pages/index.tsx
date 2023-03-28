import "../lib/fetch";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return null;
}

export function getServerSideProps() {
  fetch("http://localhost:3000/ping");
  console.log(fetch);
  return {
    props: {},
  };
}
