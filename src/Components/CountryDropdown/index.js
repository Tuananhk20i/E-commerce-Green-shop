import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
  return (
    <Button className="KhuVuc">
      <div className="info d-flex flex-column">
        <span className='label'>Lựa chọn khu vực</span>
        <span className='name'>Thái Nguyên</span>
      </div>
      <span className='ml-auto'> <FaAngleDown/></span>
    </Button>
  );
};

export default CountryDropdown;
