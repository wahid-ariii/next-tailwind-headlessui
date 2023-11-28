import { Tab } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabss({ tabs, contents }) {
  return (
    <div className='pt-4 sm:px-0'>
      <Tab.Group>
        <Tab.List className='z-10 flex w-full max-w-md space-x-1 rounded-t bg-transparent font-medium dark:border-gray-500'>
          {tabs.map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'text-dark-500 mr-2 w-full rounded-t border bg-gray-100 py-2 text-base font-medium transition-all dark:border-gray-700 dark:bg-neutral-900',
                  selected
                    ? '!bg-blue-500 text-white'
                    : 'text-dark-500 hover:bg-gray-200 hover:text-blue-600 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700 dark:hover:text-blue-600',
                )
              }
            >
              {item}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {contents.map((item) => (
            <Tab.Panel
              key={item}
              className='-mt-[0.06rem] rounded rounded-tl-none rounded-tr-none border p-4 dark:border-gray-700 dark:text-white sm:rounded-tr'
            >
              {item}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
