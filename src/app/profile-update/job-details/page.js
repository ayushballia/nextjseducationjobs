import Layout from "@/app/components/profileUpdate/Layout";
import { JobProvider } from "@/app/components/profileUpdate/JobContext";
import JobDetailsComponent from "@/app/components/profileUpdate/JobDetailsComponent"

const JobDetail = () => {
  return (
    <JobProvider>
      <Layout>
        <JobDetailsComponent />
      </Layout>
    </JobProvider>
  );
};

export default JobDetail;
