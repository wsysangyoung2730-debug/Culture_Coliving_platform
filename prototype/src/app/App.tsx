import { Outlet } from "react-router-dom";
import { ScrollToTop } from "../components/common/ScrollToTop";
import { Layout } from "../components/layout/Layout";

export function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
