import axios from "axios";
import { BASE_URL } from "./BaseUrl";

const JwtAuthService = {};

JwtAuthService.BinaryImageApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(data?.url, data?.body, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

JwtAuthService.PostApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(data?.url, data?.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

JwtAuthService.ImageApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(data?.url, data?.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error, "errorAppi");
    return error;
  }
};

JwtAuthService.GetApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(data.url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    // toast.error(`${error?.response?.data?.message}`);
    console.error(error);
    return error;
  }
};

JwtAuthService.PutApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.put(data.url, data.body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

JwtAuthService.DeleteApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(data.url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    // toast.error(`${error?.response?.response?.data?.message}`);
    console.error(error);
    return error;
  }
};

// CHECKLISTS API END //

// LMS API START
JwtAuthService.loginApiService = async function (data) {
  try {
    const response = await axios({
      method: 'post',  
      url:BASE_URL + `admin/login`,
      data:JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
        },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

JwtAuthService.LmsCertificateListApiCAll = async function (data) {
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("companyId");

  try {
    const response = await axios.post(
      BASE_URL + `certificate/index?company_id=${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

// JwtAuthService.LmsCertificateEditApiCAll = async function (data) {
//   const token = localStorage.getItem("token")
//   const id = localStorage.getItem('companyId')

//   try {
//     const response = await axios.get(BASE_URL + `certificate/62dfd90eee19ce18d4eb4c8b?company_id=${id}`,data, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization' : `Bearer ${token}`
//       }
//     });
//     return response;
//   } catch (error) {
//     toast.error(`${error?.response?.data?.message}`)
//     console.error(error);
//   }
// }

JwtAuthService.GetApiService = async function (data) {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(data.url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// LMS API END

// LMS API END

JwtAuthService.ProfileDetail = async function () {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(BASE_URL + `/profile/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};


////new ////////////////////////////////////////////////////////////////

JwtAuthService.StorewiseChecklistReportApi = async function () {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.get(BASE_URL + `StorewiseChecklistReport?company_id=63d9f962dc6d8b15a2e18d0f&startDate=2023-04-27&endDate=2023-04-27`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

///////////////////////////////////////////////////////////////////

export default JwtAuthService;



