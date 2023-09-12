import Image from "next/image";

type FeatureProps = {
  // image: any;
  title: string;
  description: string;
};

const Features = (props: FeatureProps) => {
  return (
    <section>
      <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="max-w-xl py-12 mx-auto lg:max-w-7xl">
          <div>
            <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:space-y-0 lg:text-center">
              <div>
                <div>
                  <div className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl lg:mx-auto">
                    ❖
                  </div>
                  <p className="mt-4 text-lg font-medium leading-6 text-black">
                    {props.title}
                  </p>
                </div>
                <div className="mt-4 text-base text-gray-500">
                  {props.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
