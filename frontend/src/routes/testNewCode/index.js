import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import SubmitCode from '../submitCode';
import SubmitTest from '../submitTest';
import TierList from '../tierList';

const steps = [
	{
		name: "Submit working test",
		content: <SubmitTest noButton />,
		buttonText: "Validate test"
	},
	{
		name: "Submit your code",
		content: <SubmitCode noButton />,
		buttonText: "Submit code"
	},
	{
		name: "View tier list!",
		content: <TierList />,
		buttonText: "Finish"
	}
];

export default function TestNewCode() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
					// find the first step that has been completed
					steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<Box sx={{ maxWidth: '90%', margin: "2em auto 0 auto" }}>
			<Stepper nonLinear activeStep={activeStep}>
				{steps.map((step, index) => (
					<Step key={step} completed={completed[index]}>
						<StepButton color="inherit" onClick={handleStep(index)}>
							{step.name}
						</StepButton>
					</Step>
				))}
			</Stepper>
			<div>
				{allStepsCompleted() ? (
					<>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</>
				) : (
					<>
						{steps[activeStep].content}
						<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
							<Button
								color="inherit"
								disabled={activeStep === 0}
								onClick={handleBack}
								sx={{ mr: 1 }}
							>
								Back
							</Button>
							<Box sx={{ flex: '1 1 auto' }} />
							<Button
								onClick={handleNext}
								sx={{ mr: 1 }}
								variant="contained"
								color="success"
							>
								{steps[activeStep].buttonText}
							</Button>
						</Box>
					</>
				)}
			</div>
		</Box>
	);
}
