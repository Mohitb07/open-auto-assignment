import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="p-5 md:px-[5rem] space-y-4">
        <Navbar />
        <Hero />
      </div>
    </Main>
  );
};

export default Index;
