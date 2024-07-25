const stats = [
  { id: 1, name: 'Year of Experience', value: '19 +' },
  { id: 2, name: 'Project', value: '15000+' },
  { id: 3, name: 'Clients', value: '80 +' },
];

export default function Example() {
  return (
    <div className="bg-sky-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered text */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted By Creator WorldWide
          </h2>
          <p className="mt-4 text-lg leading-7 text-white">
            Our impressive stats highlight the strength and reliability of VRONE Enterprises.
          </p>
        </div>

        {/* Statistics */}
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-white">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

