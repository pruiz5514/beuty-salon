// const useAppointmentsService = new AppointmentsService();

// interface IProps {
//   searchParams:{
//     page: string;
//     size: string;
//     order?: string
//   }
// }

export default async function AppointmentsPage() {
//   const page = searchParams.page ? parseInt(searchParams.page) : 1;
//   const size = searchParams.size ? parseInt(searchParams.size) : 8;
//   const order = searchParams.order || ''

//   const employees = await useAppointmentsService.findAllAppointments(`employees?page=${page}&size=${size}`,{order});
  
  return (
    <main>
        <h1>Citas</h1>
      {/* <FeatureTemplate data={employees} title='Citas' feature="appointments">
        <AppointmentsTable employees={employees.content}/>
      </FeatureTemplate> */}
    </main>
    
  )
}
