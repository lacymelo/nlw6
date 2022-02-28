import { AppointmentsProps } from "../Appointment";

export type RootStackParamList = {
    Home: undefined;
    AppointmentDetails: {
        guildSelected: AppointmentsProps;
    };
    AppointmentCreate: undefined;
};