import { Fragment } from "react";

export default function TableRow() {
  return (
    <Fragment>
      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">1</div>
        </td>

        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          <span>12/12/22</span>
        </td>

        <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600 hover:text-red-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </a>
        </td>
      </tr>

      <tr>
        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
          <div className="flex items-center">2</div>
        </td>

        <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
          <span>12/12/22</span>
        </td>

        <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-600 hover:text-red-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </a>
        </td>
      </tr>
    </Fragment>
  );
}
