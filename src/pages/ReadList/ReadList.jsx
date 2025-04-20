import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from '../../utility/AddToDB';
import ReadBook from '../../components/ReadBook/ReadBook';


const ReadList = () => {
    const data = useLoaderData();
    
    
    const storedBookData = getStoredData();
    const storedBook = storedBookData.map(book => parseInt(book));
    
    const readBook = data.filter(book => storedBook.includes(book.bookId));


    return (
        <div className='my-10'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <div className='space-y-5'>
                        {
                            readBook.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>This is wishlist</h2>
                </TabPanel>
               
            </Tabs>
        </div>
    )
}

export default ReadList;