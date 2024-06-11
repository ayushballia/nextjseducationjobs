import Layout from "@/app/components/profileUpdate/Layout";
import { JobProvider } from "@/app/components/profileUpdate/JobContext";
import PreviewComponent from "@/app/components/profileUpdate/PreviewComponent";


const Preview = () => {
  return (
    <JobProvider>
      <Layout>
        <PreviewComponent />
      </Layout>
    </JobProvider>
  );
};

export default Preview;
