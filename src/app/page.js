
import Layout from "./components/profileUpdate/Layout";
import JobDetailsComponent from "./components/profileUpdate/JobDetailsComponent";
import StateProvider from "./StateProvider";

export default function Home() {
  return (
    <StateProvider>
      <Layout>
        <JobDetailsComponent />
      </Layout>
    </StateProvider>
  );
}
