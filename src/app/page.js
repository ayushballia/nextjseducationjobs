import Image from "next/image";
import Layout from "./components/profileUpdate/Layout";
import JobDetailsComponent from './components/profileUpdate/JobDetailsComponent'


export default function Home() {
  return (
    <Layout>
      <JobDetailsComponent />
    </Layout>
  );
}
