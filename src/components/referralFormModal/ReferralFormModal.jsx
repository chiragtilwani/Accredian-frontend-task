import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email address').required('Required'),
});

const ReferralFormModal = ({open,onClose,onSubmit}) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Refer a Friend</DialogTitle>
    <Formik
      initialValues={{ refereeName: '', refereeEmail: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <DialogContent>
            <Field
              name="refereeName"
              as={TextField}
              label="Friend's Name"
              fullWidth
              margin="normal"
              error={touched.refereeName && !!errors.refereeName}
              helperText={touched.refereeName && errors.refereeName}
            />
            <Field
              name="refereeEmail"
              as={TextField}
              type="email"
              label="Friend's Email"
              fullWidth
              margin="normal"
              error={touched.refereeEmail && !!errors.refereeEmail}
              helperText={touched.refereeEmail && errors.refereeEmail}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button type="submit" color="primary">Submit</Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  </Dialog>
);

export default ReferralFormModal;
