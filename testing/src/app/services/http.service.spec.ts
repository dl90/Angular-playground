import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'
import { of } from 'rxjs'

import { HttpService, API_URL } from './http.service'

describe('HttpService', () => {
  let serviceWithSpy: HttpService
  let httpClientSpy: {
    get: jasmine.Spy
    post: jasmine.Spy
    delete: jasmine.Spy
  }

  let httpTestingController: HttpTestingController
  let service: HttpService

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete'])
    serviceWithSpy = new HttpService(httpClientSpy as any)
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })

    httpTestingController = TestBed.inject(HttpTestingController)
    service = TestBed.inject(HttpService)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(serviceWithSpy).toBeTruthy()
    expect(service).toBeTruthy()
  })

  describe('#getPost()', () => {
    it('should return stub value from spy', (done: DoneFn) => {
      const path = API_URL + '/1'
      const stubPost = { userId: 1, id: 1, title: 'foo', body: 'bar' }
      httpClientSpy.get.and.returnValue(of(stubPost))

      serviceWithSpy.getPost(1).subscribe((post) => {
        expect(post).toEqual(stubPost)
        done()
      }, done.fail)

      expect(httpClientSpy.get).toHaveBeenCalledWith(path)
      expect(httpClientSpy.get.calls.count()).toBe(1)
    })
  })

  describe('#getPosts()', () => {
    it('should return stub value from spy', (done: DoneFn) => {
      const path = API_URL
      const stubPosts = [
        { userId: 1, id: 1, title: 'foo', body: 'bar' },
        { userId: 1, id: 2, title: 'foo', body: 'bar' }
      ]
      httpClientSpy.get.and.returnValue(of(stubPosts))

      serviceWithSpy.getPosts().subscribe((posts) => {
        expect(posts).toEqual(stubPosts)
        done()
      }, done.fail)

      expect(httpClientSpy.get).toHaveBeenCalledWith(path)
      expect(httpClientSpy.get.calls.count()).toBe(1)
    })
  })

  describe('#postPost()', () => {
    it('should work', () => {
      const path = API_URL
      const stubBody = { userId: 1, id: 1, title: 'foo', body: 'bar' }
      const stubResponse = new HttpResponse({ status: 200, statusText: 'OK' })

      service.postPost(stubBody).subscribe((resp) => {
        expect(resp).toEqual(stubResponse)
      }, fail)

      const req = httpTestingController.expectOne(path)
      expect(req.request.method).toEqual('POST')
      expect(req.request.body).toEqual(stubBody)
      req.flush(stubResponse)
      httpTestingController.verify()
    })

    it('should error with no payload', () => {
      const path = API_URL
      const stubResponse = new HttpErrorResponse({
        status: 400,
        statusText: 'Bad Request'
      })

      service.postPost(null).subscribe((err: HttpErrorResponse) => {
        expect(err).toEqual(stubResponse)
      }, fail)

      const req = httpTestingController.expectOne(path)
      expect(req.request.method).toEqual('POST')
      expect(req.request.body).toBeNull()
      req.flush(stubResponse)
      httpTestingController.verify()
    })
  })

  describe('#deletePost()', () => {
    it('should work', () => {
      const path = API_URL + '/1'
      const stubResponse = new HttpResponse({ status: 200, statusText: '' })

      service.deletePost(1).subscribe((resp) => {
        expect(resp).toEqual(stubResponse)
      }, fail)

      const req = httpTestingController.expectOne(path)
      expect(req.request.method).toEqual('DELETE')
      req.flush(stubResponse)
      httpTestingController.verify()
    })
  })

  it('#delay() should work', () => {
    const stubMessage = 'test'
    const delayMs = 2000
    service.message = stubMessage

    service.delayedMessage(delayMs).subscribe((msg) => {
      expect(msg).toEqual(stubMessage)
    }, fail)
  })
})
