
    export const registerEmployeeAPI = async (employeeData) => {
        const response = await fetch(' http://localhost:8080/employee', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employeeData),  
        });
      
        if (!response.ok) {
          throw new Error('Failed to register employee');
        }
        else{
          const data = await response.json();
          return data

        }

      };
      

  export const getEmployeeData = async () => {
    const response = await fetch(' http://localhost:8080/getallemployee', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (!response.ok) {
      throw new Error('Failed to register employee');
    }
    else{
    return await response.json();

    }

  };

  export const deleteEmployeeData = async (data) => {
    const response = await fetch(`http://localhost:8080/deleteEmployee/${data}`, {
      method: 'DELETE',

    });
  
    if (!response.ok ) {
      throw new Error('Failed to Delete employee');
    }
    else{
      const data = await response.json();
      return data.message
    

    }

  };

  export const getSingleEmployee = async (data) => {
    const response = await fetch(`http://localhost:8080/getemployee/${data}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },

    });
  
    if (!response.ok) {
      throw new Error('Failed to Get Single employee');
    }
    else{
      const data = await response.json();
      return data

    }

  };

  export const updateEmployeefun = async (id: string, updatedData: any) => {
    const response = await fetch(`http://localhost:8080/updateEmployee/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),  

    });
  
    if (!response.ok) {
      throw new Error('Failed to Update employee');
    }
    else{
      const data = await response.json();
      return data

    }

  };