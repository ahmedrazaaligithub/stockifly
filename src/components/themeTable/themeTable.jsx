import { Table } from "antd";

const ThemeTable = ({ columns, data, loader, pagination,direction, onRow,  scroll, onChange }) => {
  return (
    <Table
    bordered
      onRow={onRow}
      columns={columns}
      direction={direction}
      dataSource={data}
      pagination={{
        defaultPageSize: 10,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "30"],
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
        total: pagination?.total || data?.length,
        hideOnSinglePage: true,
        onChange: (page, pageSize) => {
          if (pagination) {
            pagination.onChange(page , pageSize);
          }
        },
      }}
      onChange={onChange}
      loading={loader}
      size="middle"
      className="w-full"
      scroll={scroll}
    />
  );
};

export default ThemeTable;
