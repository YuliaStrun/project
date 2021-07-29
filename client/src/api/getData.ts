import { StatusCodes } from 'src/api/constants';

const serverStatus = (response: Response) => {
  if (response.status === StatusCodes.NOT_FOUND) {
    throw new Error();
  } else if (response.status !== StatusCodes.SUCCESSFULLY) {
    return Promise.reject(new Error(response.statusText));
  }
  return Promise.resolve(response);
};

const json = (response: Response) => response.json();

export const getData = async <T>(url: string, parametrs?: RequestInit): Promise<T> => {
  try {
    const data = await fetch(url, parametrs).then(serverStatus);
    if (data.headers.get('Content-type') === 'application/json') {
      return data.json();
    } else {
      return data.text() as unknown as Promise<T>;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Something went wrong');
  }
};
