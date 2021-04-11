import { FC, ReactElement, useState } from 'react';
import { StyledBackground, StyledModal, StyledCloseBtnWrapper } from './CreatePostModal.styled';
import CloseBtn from '../../components/reusable/CloseBtn';
import { useAppDispatch } from 'src/state/hooks';
import { createPost } from '../../state/posts/actions';

interface CreatePostModalParams {
    closeModal: () => void;
}

const CreatePostModal: FC<CreatePostModalParams> = ({ closeModal }): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const dispatch = useAppDispatch();

    const submitNewPost = () => {
        if (!title.length || !content.length) return;
        dispatch(createPost(title.trim(), content.trim()));
        closeModal();
    };

    return (
        <StyledBackground onClick={(e) => e.target === e.currentTarget && closeModal()}>
            <StyledModal>
                <StyledCloseBtnWrapper>
                    <CloseBtn size={40} onClick={closeModal} />
                </StyledCloseBtnWrapper>
                <textarea
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                    maxLength={100}
                    className='title'
                    rows={2}
                    placeholder={'Topic'}
                ></textarea>
                <textarea
                    onChange={({ target }) => setContent(target.value)}
                    value={content}
                    maxLength={400}
                    className='content'
                    rows={5}
                    placeholder={"What's on your mind?"}
                ></textarea>
                <div onClick={submitNewPost} className='createpost-btn'>
                    Post
                </div>
            </StyledModal>
        </StyledBackground>
    );
};

export default CreatePostModal;
