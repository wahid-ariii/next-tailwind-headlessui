import { useContext, useMemo, useState } from 'react';
import Head from 'next/head';
import BackToTop from '@components/BackToTop';
import Badge from '@components/Badge';
import ComponentProps from '@components/ComponentProps';
import Footer from '@components/Footer';
import Input from '@components/Input';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import DeleteModal from '@components/other/DeleteModal';
import ReactTableNew from '@components/ReactTableNew';
import Section from '@components/Section';
import Text from '@components/Text';
import TocLink from '@components/TocLink';
import { DownloadIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import { GlobalContext } from '@utils/GlobalContext';
import { tabledata } from '@utils/useTableData';
import useToast from '@utils/useToast';
import { CSVLink } from 'react-csv';
import toast, { Toaster } from 'react-hot-toast';

export default function PageReactTable() {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  const { updateToast, pushToast, dismissToast } = useToast();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteModalData, setDeleteModalData] = useState({ id: '', name: '' });
  function showDeleteModal(id, name) {
    setDeleteModalData({ id: id, name: name });
    setOpenDeleteModal(true);
  }
  async function handleDeleteData() {
    const toastId = pushToast({
      message: `Deleting ${deleteModalData.id} - ${deleteModalData.name} Data`,
      isLoading: true,
    });
    try {
      setTimeout(() => {
        updateToast({ toastId, message: 'Success Delete Data', isError: false });
      }, 2000);
    } catch (error) {
      console.error(error);
      updateToast({ toastId, message: 'Failed Delete Data', isError: true });
    }
    setOpenDeleteModal(false);
  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'Id',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'gender',
        header: 'Gender',
        cell: (info) => {
          return info.renderValue() == 'male' ? (
            <Badge>{info.renderValue().toUpperCase()}</Badge>
          ) : (
            <Badge.red>{info.renderValue().toUpperCase()}</Badge.red>
          );
        },
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'company',
        header: 'Company',
        footer: (info) => info.column.id,
      },
      {
        accessorKey: 'phone',
        header: 'Phone',
        footer: (info) => info.column.id,
        enableSorting: false,
      },
      {
        accessorKey: 'date',
        header: 'Date',
        cell: (info) => convertDate(info.renderValue()),
        footer: (info) => info.column.id,
      },
      {
        header: 'Action',
        cell: (info) => {
          // console.log(info.row.original.id)
          return (
            <div className='flex space-x-2'>
              <button
                onClick={() => alert(`${info.row.original.id} - ${info.row.original.name}`)}
                className='text-blue-500 hover:text-blue-700 text-sm font-medium'
              >
                Edit
              </button>
              <button
                onClick={() => showDeleteModal(info.row.original.id, info.row.original.name)}
                className='text-red-500 hover:text-red-700 text-sm font-medium'
              >
                Delete
              </button>
            </div>
          );
        },
        footer: 'action',
        enableSorting: false,
      },
    ],
    [],
  );

  function convertDate(date) {
    let localeDate = new Date(date).toLocaleDateString('en-US');
    let splitDate = localeDate.split('/');
    return `${splitDate[1]}/${splitDate[0]}/${splitDate[2]}`;
  }

  const [selectedOriginalRows, setSelectedOriginalRows] = useState([]);
  let arraySelectedId = [];
  let arrayOriginalRows = [];
  for (let item of selectedOriginalRows) {
    arraySelectedId.push(item.original.id);
    arrayOriginalRows.push(item.original);
  }
  const columnHeader = [
    { label: 'Id', key: 'id' },
    { label: 'Email', key: 'email' },
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Gender', key: 'gender' },
    { label: 'Company', key: 'company' },
    { label: 'Phone', key: 'phone' },
    { label: 'Date', key: 'date' },
  ];

  return (
    <>
      <Head>
        <title>React Table New</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <Layout>
        <main className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pb-16'>
          <Section id='toc' name='React Table TOC'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3'>
              <div>
                <TocLink href='#react-table-new' text='React Table New' />
              </div>
              <div></div>
              <div>
                <TocLink href='#dark-mode' text='Dark Mode' />
              </div>
            </div>
          </Section>

          <Section id='react-table-new' name='React Table New'>
            {arrayOriginalRows.length > 0 ? (
              <button>
                <CSVLink
                  data={arrayOriginalRows}
                  headers={columnHeader}
                  filename='file_export.csv'
                  className='flex items-center gap-2 text-white text-sm bg-sky-500 hover:bg-sky-600 transition-all duration-200 px-2 py-1 rounded'
                >
                  <DownloadIcon className='h-4 w-4' />
                  Export to CSV
                </CSVLink>
              </button>
            ) : null}
            <ReactTableNew columns={columns} data={tabledata} setSelectedOriginalRows={setSelectedOriginalRows} />
            <p className='dark:text-white text-sm mt-2'>
              Array of Selected Rows by Id : [{arraySelectedId.map((i) => i).join(', ')}]
            </p>
            <p className='dark:text-white text-sm mt-2'>
              Array of Selected Original Rows : <pre>{JSON.stringify(arrayOriginalRows, null, 2)}</pre>
            </p>

            <Toaster />

            <DeleteModal
              modalTitle='Delete Data'
              isOpenModal={openDeleteModal}
              onCloseModal={() => setOpenDeleteModal(false)}
              onConfirmModal={handleDeleteData}
              danger
            >
              <Text className='pb-2 !text-sm'>
                Sure want to delete{' '}
                <span className='font-semibold'>
                  {deleteModalData.id} - {deleteModalData.name}
                </span>{' '}
                ?
              </Text>
            </DeleteModal>

            <ComponentProps name='ReactTableGrouped'>
              <Badge>columns</Badge>
              <Badge>data</Badge>
              <Badge>className</Badge>
              <Badge>bordered</Badge>
              <Badge>ref</Badge>
            </ComponentProps>
          </Section>

          <div className='!py-2 px-2 rounded mx-4 bg-opacity-20 dark:bg-opacity-40 bg-gray-100 dark:bg-neutral-800 backdrop-filter backdrop-blur fixed bottom-20 right-3 md:right-10 z-10'>
            {darkMode ? (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'
              >
                <SunIcon />
              </button>
            ) : (
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full'
              >
                <MoonIcon />
              </button>
            )}
          </div>

          <Section id='dark-mode' name='Dark Mode'>
            <div className='flex gap-3 flex-wrap'>
              <div
                onClick={() => setDarkMode(!darkMode)}
                className='transition-all cursor-pointer w-12 h-7 dark:bg-blue-500 bg-neutral-200 rounded-full relative'
              >
                <div className='h-5 w-5 bg-white rounded-full absolute top-1 transition-all dark:left-6 left-1'></div>
              </div>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className='relative flex items-center py-0.5 px-1 bg-blue-500 rounded-full h-7'
              >
                <span className='absolute w-5 h-5 rounded-full bg-white dark:left-[1.7rem] left-1 transition-all'></span>
                <span aria-hidden={true}>☀️</span>
                <span aria-hidden={true}>🌙</span>
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label='Change Theme'
                className={`${
                  darkMode ? 'bg-neutral-800' : 'bg-gray-200'
                } relative flex gap-1 items-center px-1 py-0.5 rounded-full h-7`}
              >
                <span className='absolute w-5 h-5 rounded-full bg-blue-500 dark:left-[1.6rem] left-1.5 transition-all'></span>
                <span aria-hidden={true}>
                  <SunIcon className={`${darkMode ? 'text-white bg-white' : ''}h-5 w-5`} />
                </span>
                <span aria-hidden={true}>
                  <MoonIcon className='h-5 w-5' />
                </span>
              </button>

              {darkMode ? (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Change Theme'
                  className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full'
                >
                  <SunIcon />
                </button>
              ) : (
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  aria-label='Change Theme'
                  className='w-8 h-8 p-1 transition-all ease-in duration-300 bg-gray-100 hover:bg-gray-200 rounded-full'
                >
                  <MoonIcon className='transform rotate-45' />
                </button>
              )}
            </div>
          </Section>

          <BackToTop />
        </main>

        <Footer />
      </Layout>
    </>
  );
}
