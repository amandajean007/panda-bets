import React, { useState } from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import '../App.css';
import Auth from '../utils/auth';

const FindUser = () => {
  const [formState, setFormState] = useState({
    email: ''
  });
  const { error } = useQuery(QUERY_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("query user form state: " + formState);

    try {
      const { data } = await QUERY_USER({
        variables: { ...formState },
      });

      Auth.login(data.queryUser.token);
      console.log("data.queryuser.token: " + data.queryUser.token);
    } catch (e) {
      console.error(e);
      console.log("error with query user");
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="padding">
          <h4 className="padding white title">Find Friends</h4>
          <div className="card-body">

            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="search by email"
                name="email"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <button
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
              >
                Submit
              </button>
            </form>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FindUser;
