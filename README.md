# Conditional Table - React App

This project was made by [Hasibul Hasan](https://github.com/cbHasib) with [React JS](https://github.com/facebook/create-react-app).

<br>

## **`What I used?`**

Mainly I have used these as my coding: \
<span style="color:#00C707">**1. HTML, CSS, TailwindCSS, ReactJS, JavaScript** </span>

<br>

## **`Example`**

```
  <Table
        data={tableData}
        tableConfig={{
          column: ["email", "joiningDate", "role"],
          sort: ["joiningDate", "role"],
        }}
      />
```

It will only show the email, joiningDate and role column from the tableData. And also it will sort the table by joiningDate and role.\
<br>

```
 * The table component is used to display data in a table format
 * @param {Array} data - Array of objects to be displayed in the table
 * @param {Object} tableConfig - Array of objects to control column & sort behavior
 * @param {Array} tableConfig.column - List of column that you wanted to show
 * @param {Array} tableConfig.sort - List of sort that you wanted to show
```

  <br>

## **`Useful Links`**

**3. [Live Website](https://conditional-table.netlify.app/)**

<br>

## **`Credits`**

I am acknowledge the hard work and contribution of the following third party libraries and framework. <br> I used and take inspiration from the following third party libraries/framework.

**1. [TailwindCSS](https://tailwindcss.com/) - CSS Framework**
