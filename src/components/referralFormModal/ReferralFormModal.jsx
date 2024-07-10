import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  referrerName: Yup.string().required('Required'),
  referrerEmail: Yup.string().email('Invalid email address').required('Required'),
  refereeName: Yup.string().required('Required'),
  refereeEmail: Yup.string().email('Invalid email address').required('Required'),
});

const ReferralFormModal = (props) => (
  <Dialog open={props.open} onClose={props.onClose}>
    <DialogTitle>Refer a Friend</DialogTitle>
    <Formik
      initialValues={{ referrerName: '', referrerEmail: '', refereeName: '', refereeEmail: '' }}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <DialogContent>
            <Field
              name="referrerName"
              as={TextField}
              label="Your Name"
              fullWidth
              margin="normal"
              error={touched.referrerName && !!errors.referrerName}
              helperText={touched.referrerName && errors.referrerName}
            />
            <Field
              name="referrerEmail"
              as={TextField}
              type="email"
              label="Your Email"
              fullWidth
              margin="normal"
              error={touched.referrerEmail && !!errors.referrerEmail}
              helperText={touched.referrerEmail && errors.referrerEmail}
            />
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
            <Button onClick={props.onClose} color="primary">Cancel</Button>
            <Button type="submit" color="primary">Submit</Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  </Dialog>
);

export default ReferralFormModal;
