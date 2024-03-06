import { useFormik } from 'formik';
import DatePickerFormik from '../../Forms/DatePickerFormik';
import * as Yup from 'yup';
const SessionForm = () => {
  const validationSchema = Yup.object().shape({
    // Define validation rules for each field
    end_date: Yup.string().required('Selectionnez une date'),
    start_date: Yup.string().required('Selectionnez une date'),
  });
  const formik = useFormik({
    initialValues: {
      end_date: Date(),
      start_date: Date(),
    },
    validationSchema: validationSchema,
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
              Création d'une session
            </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6.5">
              <DatePickerFormik
                {...formik.getFieldProps('start_date')}
                label="Selectionnez la date de début "
                name="start_date"
                value={formik.values.start_date}
                error={
                  formik.touched.start_date
                    ? formik.errors.start_date?.toString()
                    : ''
                }
              />

              <div className="my-4"></div>
              <DatePickerFormik
                {...formik.getFieldProps('end_date')}
                label="Selectionnez la date de fin "
                name="end_date"
                value={formik.values.end_date.toString()}
                error={
                  formik.touched.end_date
                    ? formik.errors.end_date?.toString()
                    : ''
                }
              />

              <button
                type="submit"
                className="my-5 flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Sauvegarder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
