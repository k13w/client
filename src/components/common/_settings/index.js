import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import api from '../../../services/api'
import { Container, Content } from './styles';

import Upload from '../../upload/index';
import FileList from '../../UI/FileList/index'

export default class Settings extends Component {

    state = {
        uploadedFiles: []
    };

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview:  URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }));

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        this.setState({ uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
            return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
        })})
    }

    processUpload = uploadedFile => {
        const data = new FormData();

        data.append('file', uploadedFile.file, uploadedFile.name);

        api.post('api/controllers/uploads', data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                this.updateFile(uploadedFile.id, {
                    progress,
                })
            }
        }).then(res => {
            this.updateFile(uploadedFile.id, {
                uploaded: true,
                id: res.data._id,
                url: res.data.url
            });
        }).catch(() => {
            this.updateFile(uploadedFile.id, {
                error: true
            });
        })
    }

    render() {

        const { uploadedFiles } = this.state;

        return(
            <Container>
                <Content>
                    <Upload onUpload={this.handleUpload}/>
                    { !! uploadedFiles.length && (
                        <FileList files={uploadedFiles} />
                    )}
                </Content>
            </Container>
        )
    }
}