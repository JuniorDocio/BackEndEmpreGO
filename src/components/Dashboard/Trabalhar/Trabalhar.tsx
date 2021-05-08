import React from 'react';
import { 
  Text,
  FlatList,
  View,
  ListRenderItemInfo,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';

import { AntDesign } from '@expo/vector-icons';

interface Job {
  id: number,
  content: string,
  author: string
}

export function Trabalhar() {

  const placeholderData: Array<Job> = [
    { id: 1, author: 'Linovaldo Sebastião', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 2, author: 'Gabriel Neves 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 3, author: 'Gabriel Neves 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 4, author: 'Gabriel Neves 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 5, author: 'Gabriel Neves 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 6, author: 'Gabriel Neves 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 7, author: 'Gabriel Neves 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 8, author: 'Gabriel Neves', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 9, author: 'Gabriel Neves 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 10, author: 'Gabriel Neves 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 11, author: 'Gabriel Neves 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 12, author: 'Gabriel Neves 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 13, author: 'Gabriel Neves 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 14, author: 'Gabriel Neves 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 15, author: 'Gabriel Neves', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 16, author: 'Gabriel Neves 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non..' },
    { id: 17, author: 'Gabriel Neves 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 18, author: 'Gabriel Neves 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 19, author: 'Gabriel Neves 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 20, author: 'Gabriel Neves 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 21, author: 'Gabriel Neves 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 22, author: 'Gabriel Neves', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 23, author: 'Gabriel Neves 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 24, author: 'Gabriel Neves 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 25, author: 'Gabriel Neves 4', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 26, author: 'Gabriel Neves 5', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 27, author: 'Gabriel Neves 6', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
    { id: 28, author: 'Gabriel Neves 7', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas consequat justo, in mattis eros feugiat quis. Nullam eu ante accumsan, venenatis ex et, accumsan sem. Nulla eu faucibus leo, eget laoreet sapien. Sed nisi sapien, suscipit eget est rhoncus, pellentesque mollis tellus. Suspendisse facilisis nisi facilisis, sollicitudin dui sed, dignissim erat. Duis elementum turpis ipsum. Suspendisse a sem leo. Nam sed volutpat neque. Proin nec tincidunt dui. Mauris euismod nisi enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus metus purus, consequat sit amet laoreet vel, viverra eget nunc. Fusce sollicitudin ex nec est faucibus maximus. In maximus pretium dolor, sit amet lobortis nibh laoreet non.' },
  ]


  const renderItem = (jobs: ListRenderItemInfo<Job>): JSX.Element => {
    const job: Job = jobs.item;

    const formattedContent: string = job.content.substr(0, 200);

    return (
      <View style={ styles.job }>

        <View style={ styles.imageColumn }>
          <TouchableOpacity>
            <View style={ styles.imageView }>
              <Image style={ styles.image } source={ require('../../../../assets/techtips.png') }/>
            </View>
          </TouchableOpacity>
        </View>

        <View style={ styles.contentColumn }>
          <View style={ styles.jobHeader }>
            <TouchableOpacity>
              <Text style={ styles.authorName }>Placeholder {job.author}</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={ styles.contentText }>Placeholder { formattedContent }</Text>
            </TouchableOpacity>
          </View>

        <View style={ styles.mapView }>
          <MapView style={ styles.map} />
        </View>

        <View style={ styles.jobFooter }>
          <View style={ styles.dateView }>
            <Text style={ styles.dateText }>09:20 - 27/12/2021</Text>
          </View>

          <View style={ styles.scoreView }>
            <AntDesign name="star" size={15} color="white" />
            <Text style={ styles.scoreText }>4.8 / 5.0</Text>
          </View>
        </View>

        </View>

      </View>
    )
  };

  return (
    <FlatList
      data={ placeholderData }
      renderItem={ renderItem }
    />
  )
}

const styles = StyleSheet.create({
  job: {

    height: 300,
    flexDirection: 'row',
    marginBottom: 10
  },

  imageColumn: {

    width: '17%',
    paddingRight: 5
  },

  contentColumn: {

    width: '83%'
  },

  jobHeader: {
    overflow: 'hidden',
    height: '28%'
  },

  authorName: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5
  },

  contentText: {
    color: '#FFF',
  },

  imageView: {
    width: '100%',
    height: '45%',
    overflow: 'hidden',
    borderRadius: 50
  },
  image: {
    width: '100%',
    height: '100%'
  },

  mapView: {
    height: '64%',
    borderRadius: 15,
    overflow: 'hidden',
    width: '95%'
  },
  map: {
    width: '100%',
    height: '100%',
  },

  jobFooter: {

    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 15,

    height: '8%',
  },

  dateView: {
    width: '76%',

  },
  dateText: {
    color: '#FFF'
  },

  scoreView: {
    flexDirection: 'row',
    width: '24%',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  scoreText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
});