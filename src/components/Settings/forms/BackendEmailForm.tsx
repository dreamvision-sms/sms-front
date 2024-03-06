import { useFormik } from 'formik';
import TextFieldFormik from '../../Forms/TextFieldFormik';
import { TfiEmail, TfiLock } from 'react-icons/tfi';

const BackendEmailForm = () => {
  const formik = useFormik({
    initialValues: {
      smtp_email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Configuration du serveur de messagerie
            </h3>
          </div>
          <form>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Email host
                </label>
                <input
                  disabled
                  // type="email"
                  value={'smtp.gmail.com'}
                  placeholder="Enter your email address"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <TextFieldFormik
                Icon={TfiEmail}
                {...formik.getFieldProps('smtp_email')} // Spread getFieldProps('name') props
                name="smtp_email"
                label="Email pour l'envois"
                placeholder="janedome@gmail.com"
                value={formik.values.smtp_email}
                error={
                  formik.touched.smtp_email
                    ? formik.errors.smtp_email?.toString()
                    : ''
                }
              />
              <TextFieldFormik
                Icon={TfiLock}
                {...formik.getFieldProps('smtp_email')} // Spread getFieldProps('name') props
                name="smtp_email"
                label="Mot de passe d'application (à générer sur google security)"
                placeholder="gbjvmefzklémznfq"
                value={formik.values.smtp_email}
                error={
                  formik.touched.smtp_email
                    ? formik.errors.smtp_email?.toString()
                    : ''
                }
              />

              <button className="my-5 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackendEmailForm;
