import { useSelector } from 'react-redux';
import '../../assets/css/components.css';
import { RootState } from '../../store';
import TheContent from './TheContent';
import TheFooter from './TheFooter';
import TheHeader from './TheHeader';
import TheSideBar from './TheSideBar';

const TheLayout = () => {
  // const [showSideBar, setShowSideBar] = useState<boolean>(true)
  const { theContainer } = useSelector((state: RootState) => state.setSideBar);

  return (
    <div className="layoutAll row m-0">
      <TheSideBar />
      <div className={`Column-content  p-0 ${theContainer ? `col-sm-10` : `col-sm-12`}`}>
        <div>
          <TheHeader />
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center pb-2">
          <TheContent />
        </div>
        <TheFooter />
      </div>
    </div>
  );
};

export default TheLayout;
